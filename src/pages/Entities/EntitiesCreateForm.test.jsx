import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../tests/utils/test-utils';
import EntitiesCreateForm from './EntitiesCreateForm';
import { api } from '../../config/api';

// Mock da API
vi.mock('../../config/api', () => ({
  api: {
    get: vi.fn(),
    post: vi.fn(),
  },
}));

// Mock do useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useParams: () => ({}),
    Link: ({ children, to }) => <a href={to}>{children}</a>,
  };
});

// Mock dos contextos
vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ theme: false }),
}));

// Mock do navigation utils
vi.mock('../../utils/navigation', () => ({
  extractNavigationContext: vi.fn(() => null),
}));

describe('Entities Create Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    
    // Mock default responses
    vi.mocked(api.get).mockImplementation((url) => {
      if (url.includes('/website/all')) {
        return Promise.resolve({
          data: { 
            result: [
              { WebsiteId: 1, Name: 'Website 1' },
              { WebsiteId: 2, Name: 'Website 2' },
            ] 
          },
          status: 200,
        });
      }
      if (url.includes('/entity/exists')) {
        return Promise.resolve({
          data: { result: false },
          status: 200,
        });
      }
      return Promise.resolve({
        data: { result: [] },
        status: 200,
      });
    });
  });

  it('deve renderizar o formulário de criação de entidade', () => {
    render(<EntitiesCreateForm />);
    
    expect(screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ENTITIES_PAGE.ADD.long_name_label/i)).toBeInTheDocument();
  });

  it('deve permitir preencher o campo de nome curto', async () => {
    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    fireEvent.change(shortNameInput, { target: { value: 'Entidade 1' } });
    
    await waitFor(() => {
      expect(shortNameInput.value).toBe('Entidade 1');
    });
  });

  it('deve permitir preencher o campo de nome completo', async () => {
    render(<EntitiesCreateForm />);
    
    const longNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.long_name_label/i);
    fireEvent.change(longNameInput, { target: { value: 'Entidade Completa 1' } });
    
    await waitFor(() => {
      expect(longNameInput.value).toBe('Entidade Completa 1');
    });
  });

  it('deve validar que o nome curto é obrigatório', async () => {
    render(<EntitiesCreateForm />);
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    // O botão deve estar desabilitado quando o nome está vazio
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('deve validar tamanho mínimo do nome curto', async () => {
    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    
    // Nome muito curto (menos de 2 caracteres)
    fireEvent.change(shortNameInput, { target: { value: 'A' } });
    fireEvent.blur(shortNameInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
    });
  });

  it('deve validar tamanho máximo do nome curto', async () => {
    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    
    // Nome muito longo (mais de 50 caracteres)
    const longName = 'A'.repeat(51);
    fireEvent.change(shortNameInput, { target: { value: longName } });
    fireEvent.blur(shortNameInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Nome não pode exceder 50 caracteres/i)).toBeInTheDocument();
    });
  });

  it('deve validar tamanho máximo do nome completo', async () => {
    render(<EntitiesCreateForm />);
    
    const longNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.long_name_label/i);
    
    // Nome muito longo (mais de 200 caracteres)
    const longName = 'A'.repeat(201);
    fireEvent.change(longNameInput, { target: { value: longName } });
    fireEvent.blur(longNameInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Nome completo não pode exceder 200 caracteres/i)).toBeInTheDocument();
    });
  });

  it('deve validar caracteres válidos no nome completo', async () => {
    render(<EntitiesCreateForm />);
    
    const longNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.long_name_label/i);
    
    // Nome com caracteres inválidos
    fireEvent.change(longNameInput, { target: { value: 'Nome@#$%Inválido' } });
    fireEvent.blur(longNameInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Nome completo contém caracteres inválidos/i)).toBeInTheDocument();
    });
  });

  it('deve verificar se o nome curto já existe', async () => {
    vi.mocked(api.get).mockImplementation((url) => {
      if (url.includes('/entity/exists/shortName')) {
        return Promise.resolve({
          data: { result: true },
          status: 200,
        });
      }
      return Promise.resolve({
        data: { result: [] },
        status: 200,
      });
    });

    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    fireEvent.change(shortNameInput, { target: { value: 'Entidade Existente' } });
    
    await waitFor(() => {
      expect(screen.getByText(/O nome da entidade já existe/i)).toBeInTheDocument();
    });
  });

  it('deve verificar se o nome completo já existe', async () => {
    vi.mocked(api.get).mockImplementation((url) => {
      if (url.includes('/entity/exists/longName')) {
        return Promise.resolve({
          data: { result: true },
          status: 200,
        });
      }
      return Promise.resolve({
        data: { result: [] },
        status: 200,
      });
    });

    render(<EntitiesCreateForm />);
    
    const longNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.long_name_label/i);
    fireEvent.change(longNameInput, { target: { value: 'Entidade Completa Existente' } });
    
    await waitFor(() => {
      expect(screen.getByText(/O nome completo da entidade já existe/i)).toBeInTheDocument();
    });
  });

  it('deve criar uma nova entidade com sucesso', async () => {
    vi.mocked(api.post).mockResolvedValue({
      data: { result: { entityId: 1 } },
      status: 201,
    });

    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    fireEvent.change(shortNameInput, { target: { value: 'Nova Entidade' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    // Esperar que o botão fique habilitado
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/entity/create', expect.objectContaining({
        shortName: 'Nova Entidade',
      }));
    });

    await waitFor(() => {
      expect(screen.getByText(/Entidade criada com sucesso!/i)).toBeInTheDocument();
    });
  });

  it('deve mostrar erro quando a criação falha', async () => {
    vi.mocked(api.post).mockRejectedValue({
      response: {
        status: 500,
        data: { message: 'Erro ao criar entidade' },
      },
    });

    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    fireEvent.change(shortNameInput, { target: { value: 'Entidade Teste' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Erro ao salvar entidade/i)).toBeInTheDocument();
    });
  });

  it('deve permitir selecionar websites opcionais', async () => {
    render(<EntitiesCreateForm />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/CATEGORIES_PAGE.ADD.websites_label/i)).toBeInTheDocument();
    });
  });

  it('deve permitir cancelar e voltar para a lista', async () => {
    render(<EntitiesCreateForm />);
    
    const cancelButton = screen.getByRole('button', { name: /Sair/i });
    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard/entities');
    });
  });

  it('deve desabilitar o botão de submit enquanto está a submeter', async () => {
    vi.mocked(api.post).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        data: { result: {} },
        status: 201,
      }), 1000))
    );

    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    fireEvent.change(shortNameInput, { target: { value: 'Nova Entidade' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    // Durante o submit, deve mostrar "A guardar..."
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /A guardar.../i })).toBeInTheDocument();
    });
  });

  it('deve navegar para a lista após criação bem-sucedida', async () => {
    vi.mocked(api.post).mockResolvedValue({
      data: { result: { entityId: 1 } },
      status: 201,
    });

    render(<EntitiesCreateForm />);
    
    const shortNameInput = screen.getByLabelText(/ENTITIES_PAGE.ADD.short_name_label/i);
    fireEvent.change(shortNameInput, { target: { value: 'Nova Entidade' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Entidade criada com sucesso!/i)).toBeInTheDocument();
    });

    // Clicar no botão OK do modal
    const okButton = screen.getByRole('button', { name: /OK/i });
    fireEvent.click(okButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard/entities');
    });
  });
});

