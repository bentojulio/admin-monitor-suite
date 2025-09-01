import React, { useState, useEffect } from 'react';
import { Input, Button, RadioGroup, Breadcrumb } from 'ama-design-system';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { api } from '../../config/api';
import { Modal } from '../../components/Modal';

const UsersCreateForm = () => {
    const { register, handleSubmit, formState: { errors }, setValue, watch, trigger, reset } = useForm({ mode: 'onChange' });
    const { t } = useTranslation();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [role, setRole] = useState('1');

    const watchedPassword = watch("password");
    const watchedConfirmPassword = watch("confirmPassword");
    const watchedUsername = watch("username");
    const { id } = useParams();
    // Helper: validation rules for username
    const usernameValidation = {
        required: <div dangerouslySetInnerHTML={{__html: t('MISC.required_field')}} />,
        maxLength: { value: 50, message: "O nome não pode exceder 50 caracteres" },

    };
    const [passwordValidation, setPasswordValidation] = useState({
        required: <div dangerouslySetInnerHTML={{__html: t('MISC.required_field')}} />,
        minLength: { value: 6, message: "A palavra-passe deve ter pelo menos 6 caracteres" },
        maxLength: { value: 100, message: "A palavra-passe não pode exceder 100 caracteres" }
    });

    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({
        required: <div dangerouslySetInnerHTML={{__html: t('MISC.required_field')}} />,
    });

    const breadcrumbs = [
        { children: <Link to="/dashboard/home">Início</Link> },
        { title: t('USERS_PAGE.ADD.title') },
    ];

    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                const response = await api.get(`/user/info/${id}`);
                setValue("username", response.data.result.Username);
                setRole(response.data.result.Type === "nimda" ? "1" : "2");
            };
            fetchUser();
        }
    }, [id]);

    useEffect(() => {
        if(role === '2'){
            setPasswordValidation({
                required: false,
            });
            setConfirmPasswordValidation({
                required: false,
                validate: false
            });
        } else {
            setPasswordValidation({
                required: <div dangerouslySetInnerHTML={{__html: t('MISC.required_field')}} />,
                minLength: { value: 6, message: "A palavra-passe deve ter pelo menos 6 caracteres" },
                maxLength: { value: 100, message: "A palavra-passe não pode exceder 100 caracteres" }
            });
            setConfirmPasswordValidation({
                required: <div dangerouslySetInnerHTML={{__html: t('MISC.required_field')}} />  ,
            });
        }
    }, [role]);

    const onSubmit = async (data) => {
 
        if (role !== '2' && data.password !== data.confirmPassword) {
            setFeedbackMessage("As palavras-passe não coincidem.");
            setShowFeedbackModal(true);
            return;
        }
        
        setIsSubmitting(true);

        try {
            const payload = {
                username: data.username,
                password: data.password ?? "",
                confirmPassword: data.confirmPassword ?? "",
                type: role === '1' ? "nimda" : "monitor",
                emails: "",
                names: "",
                websites: [],
                tags: []
            };
            let response;
            if(id){
                if(payload.password === ""){
                    delete payload.password;
                    delete payload.confirmPassword;
                }
                delete payload.tags;
                payload.websites = "[]";
                payload.app = role === '1' ? "nimda" : "monitor";
                payload.defaultWebsites = "[]";
                payload.userId = id;
                response = await api.post('/user/update', payload);
            }else{
                response = await api.post('/user/create', payload);
            }
            
            if (response.status === 201 || response.status === 200) {
                setFeedbackMessage(id ? "Utilizador atualizado com sucesso!" : "Utilizador criado com sucesso!");
                reset();
            } else {
                setFeedbackMessage(id ? "Erro ao atualizar utilizador. Tente novamente." : "Erro ao criar utilizador. Tente novamente.");
            }
        } catch (error) {
            if (error.response?.status === 409) {
                setFeedbackMessage("Já existe um utilizador com este nome.");
            } else if (error.response?.status === 400) {
                setFeedbackMessage("Dados inválidos. Verifique as informações inseridas.");
            } else {
                setFeedbackMessage(id ? "Erro ao atualizar utilizador. Tente novamente." : "Erro ao criar utilizador. Tente novamente.");
            }
        } finally {
            setIsSubmitting(false);
            setShowFeedbackModal(true);
        }
    };

    return (
        <div>
            <Breadcrumb data={breadcrumbs} />
            <h1>{t('USERS_PAGE.ADD.title')}</h1>
            <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                <p>{t('USERS_PAGE.ADD.description_user')}</p>
                <p>{t('USERS_PAGE.ADD.description_user_ams')}</p>
                <div className='w-50 d-flex flex-column gap-3'>
                    <Input
                        label={t('USERS_PAGE.ADD.username_label')}
                        name="username"
                        type="text"
                        darkTheme={theme}
                        value={watchedUsername}
                        placeholder="Nome de utilizador"
                        {...register("username", usernameValidation)}
                        onChange={e => setValue("username", e.target.value)}
                        error={errors.username?.message}
                    />
                    <div>
                        <RadioGroup
                            darkTheme={theme}
                            data={[
                                { id: '1', name: t('MENU.admin_console') },
                                { id: '2', name: t('MENU.my_monitor') },
                                { id: '3', name: t('MENU.study_monitor') },
                            ]}
                            inline
                            onChange={(val) => { setRole(val); }}
                            value={role}
                        />
                    </div>
                
                        <>
                            <Input
                                label={t('USERS_PAGE.ADD.password_label') + (role === '2' ? " (opcional)" : "")}
                                name="password"
                                type="password"
                                showPassTextAria={t('LOGIN.show_password')}
                                hidePassTextAria={t('LOGIN.hide_password')}
                                darkTheme={theme}
                                placeholder="Palavra-passe"
                                {...register("password", passwordValidation)}
                                onChange={e => setValue("password", e.target.value)}
                                error={errors.password?.message}
                            />
                            <Input
                                label={t('USERS_PAGE.ADD.confirm_password_label') + (role === '2' ? " (opcional)" : "")}
                                name="confirmPassword"
                                type="password"
                                showPassTextAria={t('LOGIN.show_password')}
                                hidePassTextAria={t('LOGIN.hide_password')}
                                darkTheme={theme}
                                placeholder="Confirmar palavra-passe"
                                {...register("confirmPassword", confirmPasswordValidation)}
                                onChange={e => setValue("confirmPassword", e.target.value)}
                                error={errors.confirmPassword?.message}
                            />
                        </>
                    
                   

                    <div className="d-flex justify-content-start">
                        <Button
                            darkTheme={theme}
                            type="submit"
                            text={isSubmitting ? "A guardar..." : id ? t('ADMIN_CONSOLE.update_and_exit') : t('ADMIN_CONSOLE.save_and_exit')}
                            disabled={
                                !id
                                  ? (
                                      isSubmitting ||
                                      !watchedUsername ||
                                      (role !== '2' && (!watchedPassword || !watchedConfirmPassword))
                                    )
                                  : false
                            }
                        />
                        <Button
                            className="ms-3"
                            darkTheme={theme}
                            text="Sair"
                            variant="danger"
                            onClick={() => navigate('/dashboard/users')}
                        />
                    </div>
                </div>
            </form>
            <Modal
                isOpen={showFeedbackModal}
                onRequestClose={() => setShowFeedbackModal(false)}
                title={id ? "Atualizar Utilizador" : "Criar Utilizador"}
            >
                <p>{feedbackMessage}</p>
                <Button
                    darkTheme={theme}
                    text="OK"
                    className="btn-primary"
                    onClick={() => {
                        setShowFeedbackModal(false);
                        if (feedbackMessage === "Utilizador criado com sucesso!" || feedbackMessage === "Utilizador atualizado com sucesso!") {
                            navigate('/dashboard/users');
                        }
                    }}
                />
            </Modal>
        </div>
    );
}
export default UsersCreateForm;