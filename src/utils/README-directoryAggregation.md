# Directory Data Aggregation Utility

This utility provides functions to aggregate data across multiple directories, similar to what the `ViewDirectories` component does for a single directory.

## Functions

### `aggregateDirectoriesData(directoryNames, t)`

Fetches and aggregates data for multiple specified directories.

**Parameters:**
- `directoryNames` (string[]): Array of directory names to aggregate data for
- `t` (function): Translation function from react-i18next

**Returns:** Promise<Object> containing:
- `listItems`: Main indicators (average score, date ranges, counts)
- `listItemsGlobal`: Conformance statistics
- `barDataDynamic`: Score distribution data for bar charts
- `dataListBar`: Formatted bar chart data
- `dataRadar`: Website average scores for radar chart
- `dataListDetails`: Best practices data
- `dataListDetailsBad`: Worst practices data
- `websitesData`: Formatted website data for tables
- `allPages`: Raw pages data
- `allWebsites`: Raw websites data
- `directoriesData`: Raw directory data with breakdown

### `getAllDirectoryNames()`

Helper function to fetch all directory names from the API.

**Returns:** Promise<string[]> - Array of directory names

### `aggregateAllDirectoriesData(t)`

Convenience function to aggregate data for ALL directories.

**Parameters:**
- `t` (function): Translation function from react-i18next

**Returns:** Same as `aggregateDirectoriesData` but for all directories

## Usage Examples

### Basic Usage - Specific Directories

```jsx
import { aggregateDirectoriesData } from '../utils/directoryAggregation.js';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  const [aggregatedData, setAggregatedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const directories = ['Directory1', 'Directory2', 'Directory3'];
        const data = await aggregateDirectoriesData(directories, t);
        setAggregatedData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, [t]);

  if (!aggregatedData) return <div>Loading...</div>;

  return (
    <div>
      <Indicators listItems={aggregatedData.listItems} />
      <Indicators listItems={aggregatedData.listItemsGlobal} />
      <BarLineGraphTabs 
        barData={{ ...barData, datasets: [{ ...barData.datasets[0], data: aggregatedData.barDataDynamic }] }}
        dataList={aggregatedData.dataListBar}
      />
      <RadarGraph data={aggregatedData.dataRadar} />
    </div>
  );
};
```

### Usage - All Directories

```jsx
import { aggregateAllDirectoriesData } from '../utils/directoryAggregation.js';

const GlobalDashboard = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const globalData = await aggregateAllDirectoriesData(t);
        // Use the global aggregated data
        console.log('Global statistics:', globalData.listItems);
      } catch (error) {
        console.error('Error fetching global data:', error);
      }
    };
    
    fetchGlobalData();
  }, [t]);
};
```

### Usage - Get Directory Names First

```jsx
import { getAllDirectoryNames, aggregateDirectoriesData } from '../utils/directoryAggregation.js';

const CustomAggregation = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const fetchCustomData = async () => {
      try {
        // Get all available directories
        const allDirectories = await getAllDirectoryNames();
        console.log('Available directories:', allDirectories);
        
        // Filter or select specific ones
        const selectedDirectories = allDirectories.filter(name => 
          name.includes('Governo') || name.includes('Municipal')
        );
        
        // Aggregate data for selected directories
        const data = await aggregateDirectoriesData(selectedDirectories, t);
        console.log('Custom aggregated data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchCustomData();
  }, [t]);
};
```

## Data Structure

The returned aggregated data object contains:

```javascript
{
  // Ready-to-use indicator arrays
  listItems: [
    { title: 'Pontuação média', value: 8 },
    { title: 'Avaliação mais antiga de uma página', value: '15 de dezembro de 2020' },
    { title: 'Avaliação mais recente de uma página', value: '21 de maio de 2025' },
    { title: 'Nº de Sítios Web', value: 150 },
    { title: 'Nº de Páginas(Avaliadas)', value: '5000 (4500)' },
    { title: 'Nº médio de Páginas por Sítio', value: 33 }
  ],
  
  listItemsGlobal: [
    { title: 'Sítios Web', value: 150 },
    { title: 'Sítios Web não conformes', value: 45 },
    { 
      title: 'Sítios Web conformes', 
      value: 105,
      itemsList: [
        { title: 'Conformidade A: sem erros de nível A', value: '85 (56.67%)' },
        { title: 'Conformidade AA: sem erros de nível A + AA', value: '70 (46.67%)' },
        { title: 'Conformidade AAA: sem erros de nível A + AA + AAA', value: '50 (33.33%)' }
      ]
    }
  ],
  
  // Chart data
  barDataDynamic: [10, 25, 45, 67, 89, 123, 145, 167, 89], // Score distribution
  dataListBar: [...], // Formatted bar chart data with percentages
  dataRadar: ['8.5', '7.2', '9.1', ...], // Website average scores
  
  // Practice data for tables
  dataListDetails: [...], // Best practices
  dataListDetailsBad: [...], // Worst practices
  
  // Website data for tables
  websitesData: [...], // Formatted website information
  
  // Raw data for custom processing
  allPages: [...], // All page records
  allWebsites: [...], // All website records
  directoriesData: [...] // Directory breakdown with associated data
}
```

## Error Handling

The functions include error handling for:
- Network failures
- Empty datasets
- Invalid directory names
- Missing translation functions

Always wrap calls in try-catch blocks for production use.

## Performance Notes

- API calls are made in parallel for better performance
- Large datasets are processed efficiently using native array methods
- Memory usage is optimized by processing data in streams where possible
- Consider implementing caching for frequently accessed aggregations 