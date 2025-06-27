import React from 'react';
import { Input, Button, Select, Tabs } from "ama-design-system";
import { useTranslation } from "react-i18next";

const Associations = ({ register, errors, darkTheme }) => {
  const { t } = useTranslation();
    return (
                <div  className='w-50 d-flex flex-column gap-3'>
          <h2 className="mb-4">{t('WEBSITES_PAGE.ADD.associations_label')}</h2>

          <Select
          darkTheme={darkTheme}
            id="entities"
            label={t('WEBSITES_PAGE.ADD.entities_label')  + ` ${t('HEADER.optional')}`}
            {...register("entities")}
            options={[
              { value: "entidade1", label: t('WEBSITES_PAGE.ADD.entity_1') },
              { value: "entidade2", label: t('WEBSITES_PAGE.ADD.entity_2') },
              { value: "entidade3", label: t('WEBSITES_PAGE.ADD.entity_3') },
            ]}
            isMulti
          />

          <Select
          darkTheme={darkTheme}
            id="users"
            label={t('WEBSITES_PAGE.ADD.users_label')  + ` ${t('HEADER.optional')}`}
            {...register("users")}
            options={[
              { value: "utilizador1", label: t('WEBSITES_PAGE.ADD.user_1') },
              { value: "utilizador2", label: t('WEBSITES_PAGE.ADD.user_2') },
              { value: "utilizador3", label: t('WEBSITES_PAGE.ADD.user_3') },
            ]}
            isMulti
          />

          <Select
          darkTheme={darkTheme}
            id="categories"
            label={t('WEBSITES_PAGE.ADD.categories_label')  + ` ${t('HEADER.optional')}`}
            {...register("categories")}
            options={[
              { value: "categoria1", label: t('WEBSITES_PAGE.ADD.category_1') },
              { value: "categoria2", label: t('WEBSITES_PAGE.ADD.category_2') },
              { value: "categoria3", label: t('WEBSITES_PAGE.ADD.category_3') },
            ]}
            isMulti
          />
</div>
    );
};

export default Associations;