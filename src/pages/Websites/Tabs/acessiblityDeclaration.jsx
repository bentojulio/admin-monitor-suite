import React from 'react';
import { Input, Button, Select, Tabs } from "ama-design-system";
import { useTranslation } from 'react-i18next';

const AcessibilityDeclaration = ({ register, errors, darkTheme }) => {
    const { t } = useTranslation();
    return (
         <div className='w-50 d-flex flex-column gap-3'>
            <h2 className="mb-4">{t('WEBSITES_PAGE.ADD.declaration_label')}</h2>
            <Select
              darkTheme={darkTheme}
              id="compliance"
              label={t('WEBSITES_PAGE.ADD.compliance_label')}
              {...register("compliance", { required: t('MISC.required_field') })}
              error={errors.compliance?.message}
              options={[
                { value: "2", label: "Declaração parcialmente conforme" },
                { value: "3", label: "Declaração plenamente conforme" },
                { value: "1", label:"Declaração não conforme" },
              ]}
            />

            <Input
              darkTheme={darkTheme}
              id="accessibility_declaration_date"
              label={t('WEBSITES_PAGE.ADD.declaration_date_label')}
              type="date"
              {...register("accessibility_declaration_date", { required: t('MISC.required_field') })}
              error={errors.accessibility_declaration_date?.message}
            />
          </div>
    );
};

export default AcessibilityDeclaration;