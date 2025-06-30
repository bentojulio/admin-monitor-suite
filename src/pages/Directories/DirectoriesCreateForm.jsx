import React from 'react';
import { Input, Button, CheckGroup, RadioGroup, Breadcrumb, Select } from 'ama-design-system';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
const DirectoriesCreateForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { t } = useTranslation();
    const { theme } = useTheme();
    const breadcrumbs = [
        { children: <Link to="/dashboard/home">Início</Link> },

        {
            title: t('DIRECTORIES_PAGE.ADD.title'),
        }
    ];
    const onSubmit = (data) => {
        console.log("User data:", data);
        // Add user creation logic here
    };

    return (
        <div>
            <Breadcrumb data={breadcrumbs} />

            <h1>{t('DIRECTORIES_PAGE.ADD.title')}</h1>
            <form className="bg-white p-4 mt-3" onSubmit={handleSubmit(onSubmit)}>
                <div className='w-50 d-flex flex-column gap-3'>
                    <Input
                        id="name"
                        label={t('DIRECTORIES_PAGE.ADD.name_label')}
                        name="name"
                        darkTheme={theme}
                        type="text"
                        {...register("name", { required: true })}
                        error={errors.name ? "Campo obrigatório" : undefined}
                    />

                    <div>
                        <CheckGroup
                            id="show_in_observatory"
                            darkTheme={theme}
                            data={[
                                {
                                    name: t('DIRECTORIES_PAGE.ADD.show_in_observatory'),
                                },

                            ]}
                            inline
                            onChange={() => { }}

                        />
                    </div>

                    <div>
                        <label>{t('DIRECTORIES_PAGE.ADD.choose_format')}</label>
                        <RadioGroup
                            darkTheme={theme}
                            data={[
                                {
                                    id: 'id_intersection',
                                    name: t('DIRECTORIES_PAGE.ADD.intersection')
                                },
                                {
                                    id: 'id_union',
                                    name: t('DIRECTORIES_PAGE.ADD.union')
                                }
                            ]}
                            inline
                            onChange={() => { }}
                            value="1"
                        />
                    </div>

                    <Select
                        id="entities"
                        darkTheme={theme}
                        label={t('DIRECTORIES_PAGE.ADD.select_categories')}
                        name="entities"
                        {...register("entities", { required: true })}
                        error={errors.entities ? "Campo obrigatório" : undefined}
                        options={[
                            { value: "1", label: "Categoria 1" },
                            { value: "2", label: "Categoria 2" },
                            { value: "3", label: "Categoria 3" },
                            { value: "4", label: "Categoria 4" },
                        ]}
                    >
                    </Select>


                    <div className="d-flex justify-content-start">
                        <Button
                            type="submit"
                            darkTheme={theme}
                            text={t('DIRECTORIES_PAGE.ADD.create_button')}

                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default DirectoriesCreateForm;