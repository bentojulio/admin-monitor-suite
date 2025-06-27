import React from 'react';
import { Input, Button, Select, Tabs } from "ama-design-system";
import { useTranslation } from 'react-i18next';

const UsuabilitySeal = ({ register, errors, darkTheme }) => {
    const { t } = useTranslation();
    return (
         <div  className='w-50 d-flex flex-column gap-3'>
            <h2 className="mb-4">{t('WEBSITES_PAGE.ADD.stamp_label')}</h2>
            <Select
            darkTheme={darkTheme}
              id="type_seal"
              label={t('WEBSITES_PAGE.ADD.stamp_type_label')}
              {...register("type_seal", { required: t('MISC.required_field') })}
              error={errors.type_seal?.message}
              options={[
                { value: "1", label: t('WEBSITES_PAGE.ADD.stamp_bronze') },
                { value: "2", label: t('WEBSITES_PAGE.ADD.stamp_silver') },
                { value: "3", label: t('WEBSITES_PAGE.ADD.stamp_gold') },
              ]}
            />
            <Input
            darkTheme={darkTheme}
              id="usability_seal_date"
              label={t('WEBSITES_PAGE.ADD.stamp_date_label')}
              type="date"
              {...register("usability_seal_date", { required: t('MISC.required_field') })}
              error={errors.usability_seal_date?.message}
            />
          </div>
    );
};

export default UsuabilitySeal;