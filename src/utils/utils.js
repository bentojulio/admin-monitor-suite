import tests from './tests'
import { clone, orderBy} from "lodash";

import { api } from '../config/api'
const pathUrl = "/dashboard/"
function getTopTenErrors(errors) {
  const errorsList = [];
  console.log("EROR:", errors)
  for (const key in errors || {}) {
    if (errors[key]) {
      errorsList.push({
        key,
        n_elems: errors[key].n_elems,
        nOccurrences: errors[key].nOccurrences,
        n_pages: errors[key].n_pages,
        test: tests[key].test
      });
    }
  }

  return errorsList.sort((a, b) => a.n_elems - b.n_elems).slice(0, 10);
}
export function removeCertainPages(parsedData, name, newPages) {
  localStorage.removeItem('websiteListForWebsitePage')
  const obj = parsedData.find(item => item.name === name);

  if (obj) {
    obj.pages = newPages.map(page => {
      let newPage
      if (page.hasOwnProperty('PageId')) {
        newPage = { id: page.PageId, ...page }
        delete newPage.PageId;
      }
      return newPage;
    });
    localStorage.setItem('websiteListForWebsitePage', JSON.stringify(parsedData))
  }

  return parsedData;
}
function getTopTenBestPractices(success) {
  const practices = [];
  for (const key in success || {}) {
    practices.push({
      key,
      nOccurrences: success[key].nOccurrences,
      n_pages: success[key].n_pages,
      test: tests[key].test
    });
  }

  return orderBy(
    practices,
    ["nOccurrences", "n_pages"],
    ["desc", "desc"]
  ).slice(0, 10);
}

function getWebsiteSuccessDetailsTable(success, pages) {
  const practices = [];
  for (const key in success || {}) {
    if (success[key]) {
      practices.push({
        key,
        test: tests[key].test,
        nOccurrences: success[key].nOccurrences,
        n_pages: success[key].n_pages,
        lvl: tests[key].level.toUpperCase(),
        quartiles: calculateQuartiles(getPassedOccurrencesByPage(key, pages)),
      });
    }
  }

  const practicesData = orderBy(
    practices,
    ["n_pages", "nOccurrences"],
    ["desc", "desc"]
  );
  const practicesKeys = Object.keys(practicesData);

  return { practicesKeys, practicesData };
}

function getWebsiteErrorsDetailsTable(errors, pages) {
  const practices = [];
  for (const key in errors || {}) {
    if (errors[key]) {
      practices.push({
        key,
        test: tests[key].test,
        nOccurrences: errors[key].nOccurrences,
        n_pages: errors[key].n_pages,
        lvl: tests[key].level.toUpperCase(),
        quartiles: calculateQuartiles(getErrorOccurrencesByPage(key, pages)),
      });
    }
  }

  const practicesData = orderBy(
    practices,
    ["n_pages", "nOccurrences"],
    ["desc", "desc"]
  );
  const practicesKeys = Object.keys(practicesData);

  return { practicesKeys, practicesData };
}

function getPassedOccurrencesByPage(test, pages) {
  const occurrences = [];
  for (const page of pages || []) {
    const tot = JSON.parse(atob(page.Tot))
    const practice = tot.elems[tests[test]["test"]];
    if (
      tot.results[test] &&
      tests[test]["result"] === "passed"
    ) {
      if (!practice) {
        occurrences.push(1);
      } else {
        occurrences.push(practice);
      }
    }
  }
  return occurrences;
}

function getErrorOccurrencesByPage(test, pages) {
  const occurrences = [];

  for (const p of pages) {
    const tot = JSON.parse(atob(p.Tot))
    const error = tot["elems"][tests[test]["test"]];
    if (error && tests[test]["result"] === "failed") {
      if (error === "langNo" || error === "titleNo") {
        occurrences.push(1);
      } else {
        occurrences.push(error);
      }
    }
  }
  return occurrences;
}
export function pagesListTable(pages, moment) {
  let pagesTable = []
  pages.map((page) => {
    const pageObject = {
      ...page,
      Evaluation_Date: moment(page.Evaluation_Date).format("LL"),
    }
    pagesTable.push(pageObject)
  })

  return pagesTable;
}
function calculateQuartiles(data) {
  const values = data
    .filter((e) => e !== undefined)
    .sort((a, b) => a - b);

  let q1;
  let q2;
  let q3;
  let q4;

  q1 = values[Math.round(0.25 * (values.length + 1)) - 1];

  if (values.length % 2 === 0) {
    q2 = (values[values.length / 2 - 1] + values[values.length / 2]) / 2;
  } else {
    q2 = values[(values.length + 1) / 2];
  }

  q3 = values[Math.round(0.75 * (values.length + 1)) - 1];
  q4 = values[values.length - 1];

  const tmp = {
    q1: [],
    q2: [],
    q3: [],
    q4: [],
  };

  let q;
  for (const v of values || []) {
    if (v <= q1) {
      q = "q1";
    } else {
      if (v <= q2) {
        q = "q2";
      } else {
        if (v <= q3) {
          q = "q3";
        } else {
          q = "q4";
        }
      }
    }

    tmp[q].push(v);
  }

  const final = [];

  for (const k in tmp) {
    if (k) {
      const v = tmp[k];
      const sum = v.length;
      if (sum > 0) {
        const test = {
          tot: sum,
          por: Math.round((sum * 100) / values.length),
          int: {
            lower: v[0],
            upper: v[sum - 1],
          },
        };

        final.push(clone(test));
      }
    }
  }

  return final;
}

export function getData(website, pages, websiteList, websiteListForWebsitePage, moment) {
  let websiteScore = 0;
  let conformidadeA = 0;    //Não pode ter erros do tipo A
  let conformidadeAA = 0;   //Não pode ter erros do tipo A, AA
  let conformidadeAAA = 0;  //Não pode ter erros do tipo A, AA, AAA
  let pageWithErrors = 0;
  let accessibilityPlot = [];
  let scoreDistributionFrequency = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let errors = {}
  let success = {}
  let recentPage
  let oldestPage
  let pagesTable = []
  try {
    pages.map((page) => {


      const totAfterTransformation = JSON.parse(atob(page.Tot))
      const errorAfterTransformation = JSON.parse(atob(page.Errors))

      const pageScore = parseFloat(page.Score ?? 0) || 0;
      // Website Score
      websiteScore += pageScore

      // Conformed Pages
      if (page.A > 0) {
        pageWithErrors++;
      } else if (page.AA > 0) {
        conformidadeA++;
      } else if (page.AAA > 0) {
        conformidadeAA++;
      } else {
        conformidadeAAA++;
      }

      // Accesssibility Plot - Radar Data
      accessibilityPlot.push(pageScore)

      // BarLine Data - Frequência de score por páginas
      const floor = Math.floor(pageScore);
      scoreDistributionFrequency[floor >= 2 ? (floor === 10 ? floor - 2 : floor - 1) : 0]++;

      // Errors
      const pageErrors = errorAfterTransformation
      for (const key in totAfterTransformation.results || {}) {
        if (tests[key] === undefined) {
          continue;
        }

        const test = tests[key]["test"];
        const elem = tests[key]["elem"];
        const occurrences =
          pageErrors[test] === undefined || pageErrors[test] < 1
            ? 1
            : pageErrors[test];
        const result = tests[key]["result"];
        if (result === "failed") {
          if (Object.keys(errors).includes(key)) {
            errors[key]["nOccurrences"] += occurrences;
            errors[key]["n_pages"]++;
          } else {
            errors[key] = {
              n_pages: 1,
              nOccurrences: occurrences,
              elem,
              test,
              result,
            };
          }
        } else if (result === "passed") {
          if (Object.keys(success).includes(key)) {
            success[key]["nOccurrences"] += occurrences;
            success[key]["n_pages"]++;
          } else {
            success[key] = {
              n_pages: 1,
              nOccurrences: occurrences,
              elem,
              test,
              result,
            };
          }
        }
      }

      //Evaluation dates
      if (!recentPage) {
        recentPage = new Date(page.Evaluation_Date);
      }

      if (!oldestPage) {
        oldestPage = new Date(page.Evaluation_Date);
      }

      if (new Date(page.Evaluation_Date) > recentPage) {
        recentPage = new Date(page.Evaluation_Date);
      } else if (new Date(page.Evaluation_Date) < oldestPage) {
        oldestPage = new Date(page.Evaluation_Date);
      }
    

      const pageObject = {
        id: page.PageId,
        Uri: page.Uri,
        Show_In: page.Show_In,
        Creation_Date: page.Creation_Date,
        Score: typeof pageScore !== "number" ? 0 : pageScore,
        Evaluation_Date: page.Evaluation_Date,
        A: page.A,
        AA: page.AA,
        AAA: page.AAA,
        Tot: page.Tot,
        Errors: page.Errors,
      }
      delete pageObject.PageId;
      pagesTable.push(pageObject)
    })

    const websiteForList = {
      id: website.WebsiteId,
      rank: 0,
      name: website.Name,
      declaration: website.Declaration,
      stamp: website.Stamp,
      score:  websiteScore / pages.length ,
      nPages: pages.length,
      A: conformidadeA,
      AA: conformidadeAA,
      AAA: conformidadeAAA
    }
    websiteList.push(websiteForList)


    const websiteForWebsitePage = {
      id: website.WebsiteId,
      name: website.Name,
      startingUrl: website.StartingUrl,
      oldestPage: oldestPage,
      recentPage: recentPage,
      score: typeof (websiteScore / pages.length) !== 'number' ? 0 : websiteScore / pages.length,
      nPages: pages.length,
      pagesWithErrors: pageWithErrors,
      pagesWithoutErrorsA: conformidadeA,
      pagesWithoutErrorsAA: conformidadeAA,
      pagesWithoutErrorsAAA: conformidadeAAA,
      pagesWithoutErrors: conformidadeA + conformidadeAA + conformidadeAAA,
      accessibilityPlotData: accessibilityPlot,
      scoreDistributionFrequency: scoreDistributionFrequency,
      errorsDistribution: getTopTenErrors(errors),
      bestPracticesDistribution: getTopTenBestPractices(success),
      errors: errors,
      success: success,
      successDetailsTable: getWebsiteSuccessDetailsTable(success, pages),
      errorsDetailsTable: getWebsiteErrorsDetailsTable(errors, pages),
      pages: pagesTable
    }
    websiteListForWebsitePage.push(websiteForWebsitePage)
  } catch (e) {
    console.log(e)
  }
}

export function createStatisticsObject(data, moment) {
  return {
    score: (data.score != null) && (typeof data.score === "number") ? Math.floor(data.score * 10) / 10 : 0,
    recentPage: moment(data.recentPage).format("LL"),
    oldestPage: moment(data.oldestPage).format("LL"),
    statsTable: [
      data.nPages,
      data.pagesWithoutErrors,
      data.pagesWithErrors,
      data.pagesWithoutErrorsA,
      data.pagesWithoutErrorsAA,
      data.pagesWithoutErrorsAAA
    ]
  }
}


export async function logoutUser(setLoading, setError, navigate, t) {
  setLoading(true)
  if (api.isUserLoggedIn()) {
    const { response, err } = await api.logout()
    removeLocalStorages(navigate)

  } else {
    removeLocalStorages(navigate)
  }
  setLoading(false)
}

export function removeLocalStorages(navigate) {
  console.log('remove localstorages')
  localStorage.removeItem('MM-username');
  localStorage.removeItem('MM-SSID');
  localStorage.removeItem('expires-at');
  localStorage.removeItem('websiteList')
  localStorage.removeItem('websiteListForWebsitePage')
  localStorage.removeItem('evaluation')
  localStorage.removeItem('evaluationUrl')
  localStorage.removeItem("elemData");
  navigate(`${pathURL}`)
}


export function checkUserHasPage(website, websitesList, pageName) {
  const targetObject = websitesList.find(obj => obj.name === website);
  if (targetObject) {
    const pageObject = targetObject.pages.find(obj => obj.Uri === pageName);
    if (pageObject) {
      return true
    }
  }
  return false
}


export function getBarLineGraph(t, dataForLine, dataForBar, websiteStats, theme) {
  const headersBarLine = ['[1 - 2[', '[2 - 3[', '[3 - 4[', '[4 - 5[', '[5 - 6[', '[6 - 7[', '[7 - 8[', '[8 - 9[', '[9 - 10[']

  const dataBarLine = {
    labels: headersBarLine,
    datasets: [
      {
        type: 'line',
        label: t("DIALOGS.scores.cumulative"),
        data: dataForLine,
        backgroundColor: 'rgba(51, 51, 153, 1)',
        borderColor: 'rgba(51, 51, 153, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0,
        pointBackgroundColor: 'red', // Set the color of the dots
        pointBorderColor: 'red',     // Set the border color of the dots
      },
      {
        type: 'bar',
        label: t("DIALOGS.scores.frequency"),
        data: dataForBar,
        backgroundColor: [
          '#e90018',
          '#e90018',
          '#f38e10',
          '#f38e10',
          '#f3d609',
          '#f3d609',
          '#f3d609',
          '#15ac51',
          '#15ac51'
        ],
        borderWidth: 0,
      }
    ]
  };

  const optionsBarLine = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of the legend text
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.dataset.type === 'bar') {
              // Format the tooltip for bar dataset
              const nPages = (context.raw * websiteStats.statsTable[0] / 100).toFixed(0) ?? 0
              return [
                `${label}${context.raw}%`,      // Main value
                `${t("DIALOGS.scores.frequency")}: ${nPages}` // Additional value
              ];
            } else if (context.dataset.type === 'line') {
              // Format the tooltip for line dataset
              const nPages = (context.raw * websiteStats.statsTable[0] / 100).toFixed(0) ?? 0
              return [
                `${label}${context.raw}%`,      // Main value
                `${t("DIALOGS.scores.percentage")}: ${nPages}` // Additional value
              ];
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: t("DIALOGS.scores.range"),
          color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of Title on X axis
          font: {
            size: 14
          }
        },
        ticks: {
          font: {
            size: 14
          },
          color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white' // Color of Text on X axis
        },
        grid: {
          color: theme === "light" ? 'rgba(0,0,0, 0.1)' : 'rgba(255, 255, 255, 0.2)' // Color of Dividers vertically
        }
      },
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: t("DIALOGS.scores.percentage_label"),
          color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of Title on Y axis
          font: {
            size: 14
          }
        },
        ticks: {
          font: {
            size: 14,
          },
          color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white' // Color of Text on Y axis
        },
        grid: {
          color: theme === "light" ? 'rgba(0,0,0, 0.1)' : 'rgba(255, 255, 255, 0.2)' // Color of Dividers horizontaly
        }
      }
    }
  };

  return { headersBarLine, dataBarLine, optionsBarLine }
}

export function getBarLineTable(t) {
  const dataHeaders = [
    [
      { type: "Text", name: t("DIALOGS.scores.range") },
      { type: "Text", name: t("DIALOGS.scores.frequency"), justifyCenter: true },
      { type: "Text", name: t("DIALOGS.scores.frequency") + " (%)", justifyCenter: true },
      { type: "Text", name: t("DIALOGS.scores.cumulative"), justifyCenter: true },
      { type: "Text", name: t("DIALOGS.scores.cumulative") + " (%)", justifyCenter: true },
    ]
  ]

  const columnsOptions = {
    range: { type: "Text", center: false, bold: false, decimalPlace: false },
    frequency: { type: "Number", center: true, bold: false, decimalPlace: false },
    frequency_percent: { type: "Text", center: true, bold: false, decimalPlace: false },
    cumulative: { type: "Number", center: true, bold: false, decimalPlace: false },
    cumulative_percent: { type: "Text", center: true, bold: false, decimalPlace: false },
  }

  return { dataHeaders, columnsOptions }
}

export function getRadarGraph(t, theme, labelsForRadar, data) {
  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        grid: {
          color: theme === "light" ? "lightgrey" : 'lightgrey', // Color of the grid lines
        },
        angleLines: {
          color: theme === "light" ? "lightgrey" : 'lightgrey', // Color of the angle lines
        },
        ticks: {
          backdropColor: theme === "light" ? "transparent" : '#2c3241', // Background color for the tick labels
          color: theme === "light" ? "black" : 'white', // Color of the tick labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme === "light" ? "black" : '#b6dcf6', // Color of the legend text
          font: {
            size: 14,
            family: 'Lato'
          }
        }

      },

    }
  }

  const manchaData = {
    labels: labelsForRadar,
    datasets: [
      {
        label: t("PAGES.accessibility_plot.label"),
        data: data,
        backgroundColor: theme === "light" ? 'rgba(255, 99, 132, 0.2)' : 'rgba(182, 220, 246, 0.2)',
        borderColor: theme === "light" ? 'rgba(255, 99, 132, 1)' : '#b6dcf6',
        borderWidth: 1,
      },
    ],
  };

  return { options, manchaData }
}

export function getRadarTable(t) {
  const dataHeaders = [
    { type: "Text", name: t("PAGES.accessibility_plot.headerTable"), justifyCenter: true },
    { type: "Text", name: t("STATISTICS.score"), justifyCenter: true },
  ]

  let columnsOptions = {
    id: { type: "Number", center: true, bold: false, decimalPlace: false },
    score: { type: "Number", center: true, bold: false, decimalPlace: true }
  }

  return { dataHeaders, columnsOptions }
}