import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../tests/utils/test-utils';
import Login from './index';
import * as AuthContext from '../../context/AuthContext';

// Mock do AuthContext
vi.mock('../../context/AuthContext', () => ({
  useAuth: vi.fn(() => ({
    login: vi.fn(),
    loading: false,
  })),
}));

// Mock do useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Login Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('deve renderizar o formulário de login', () => {
    render(<Login />);
    
    expect(screen.getByLabelText(/LOGIN.machineIP_label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/LOGIN.email_label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/LOGIN.password_label/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /LOGIN.submit/i })).toBeInTheDocument();
  });

  it('deve permitir preencher o campo de URL da máquina', async () => {
    render(<Login />);
    
    const machineIPInput = screen.getByLabelText(/LOGIN.machineIP_label/i);
    fireEvent.change(machineIPInput, { target: { value: 'http://localhost:3000' } });
    
    await waitFor(() => {
      expect(machineIPInput.value).toBe('http://localhost:3000');
    });
  });

  it('deve permitir preencher o campo de username', async () => {
    render(<Login />);
    
    const usernameInput = screen.getByLabelText(/LOGIN.email_label/i);
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    
    await waitFor(() => {
      expect(usernameInput.value).toBe('testuser');
    });
  });

  it('deve permitir preencher o campo de password', async () => {
    render(<Login />);
    
    const passwordInput = screen.getByLabelText(/LOGIN.password_label/i);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    await waitFor(() => {
      expect(passwordInput.value).toBe('password123');
    });
  });

  it('deve chamar a função login ao submeter o formulário', async () => {
    const mockLogin = vi.fn().mockResolvedValue({ success: true });
    
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      login: mockLogin,
      loading: false,
    });

    render(<Login />);
    
    const machineIPInput = screen.getByLabelText(/LOGIN.machineIP_label/i);
    const usernameInput = screen.getByLabelText(/LOGIN.email_label/i);
    const passwordInput = screen.getByLabelText(/LOGIN.password_label/i);
    const submitButton = screen.getByRole('button', { name: /LOGIN.submit/i });

    fireEvent.change(machineIPInput, { target: { value: 'http://localhost:3000' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('testuser', 'password123', 'http://localhost:3000');
    });
  });

  it('deve mostrar mensagem de erro quando o login falha', async () => {
    const mockLogin = vi.fn().mockResolvedValue({ 
      success: false, 
      error: 'Credenciais inválidas' 
    });
    
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      login: mockLogin,
      loading: false,
    });

    render(<Login />);
    
    const machineIPInput = screen.getByLabelText(/LOGIN.machineIP_label/i);
    const usernameInput = screen.getByLabelText(/LOGIN.email_label/i);
    const passwordInput = screen.getByLabelText(/LOGIN.password_label/i);
    const submitButton = screen.getByRole('button', { name: /LOGIN.submit/i });

    fireEvent.change(machineIPInput, { target: { value: 'http://localhost:3000' } });
    fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Credenciais inválidas')).toBeInTheDocument();
    });
  });

  it('deve desabilitar o botão de submit durante o carregamento', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      login: vi.fn(),
      loading: true,
    });

    render(<Login />);
    
    const submitButton = screen.getByRole('button', { name: /LOGIN.loading_text/i });
    expect(submitButton).toBeDisabled();
  });

  it('deve salvar o URL da API no localStorage ao fazer login', async () => {
    const mockLogin = vi.fn().mockResolvedValue({ success: true });
    
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      login: mockLogin,
      loading: false,
    });

    render(<Login />);
    
    const machineIPInput = screen.getByLabelText(/LOGIN.machineIP_label/i);
    const usernameInput = screen.getByLabelText(/LOGIN.email_label/i);
    const passwordInput = screen.getByLabelText(/LOGIN.password_label/i);
    const submitButton = screen.getByRole('button', { name: /LOGIN.submit/i });

    fireEvent.change(machineIPInput, { target: { value: 'http://localhost:3000' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('@AMS:apiUrl', 'http://localhost:3000');
    });
  });

  it('deve navegar para /dashboard/home após login bem-sucedido', async () => {
    const mockLogin = vi.fn().mockResolvedValue({ success: true });
    
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      login: mockLogin,
      loading: false,
    });

    render(<Login />);
    
    const machineIPInput = screen.getByLabelText(/LOGIN.machineIP_label/i);
    const usernameInput = screen.getByLabelText(/LOGIN.email_label/i);
    const passwordInput = screen.getByLabelText(/LOGIN.password_label/i);
    const submitButton = screen.getByRole('button', { name: /LOGIN.submit/i });

    fireEvent.change(machineIPInput, { target: { value: 'http://localhost:3000' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard/home');
    });
  });
});

