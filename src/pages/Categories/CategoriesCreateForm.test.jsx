import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../tests/utils/test-utils';
import CategoriesCreateForm from './CategoriesCreateForm';
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

// Mock do lodash debounce
vi.mock('lodash/debounce', () => ({
  default: (fn) => {
    fn.cancel = vi.fn();
    return fn;
  },
}));

describe('Categories Create Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    
    // Mock default responses
    vi.mocked(api.get).mockImplementation((url) => {
      if (url.includes('/directory/all')) {
        return Promise.resolve({
          data: { 
            result: [
              { DirectoryId: 1, Name: 'Diretório 1' },
              { DirectoryId: 2, Name: 'Diretório 2' },
            ] 
          },
          status: 200,
        });
      }
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
      if (url.includes('/tag/exists')) {
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

  it('deve renderizar o formulário de criação de categoria', () => {
    render(<CategoriesCreateForm />);
    
    expect(screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i)).toBeInTheDocument();
  });

  it('deve permitir preencher o campo de nome', async () => {
    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Categoria 1' } });
    
    await waitFor(() => {
      expect(nameInput.value).toBe('Categoria 1');
    });
  });

  it('deve validar que o nome é obrigatório', async () => {
    render(<CategoriesCreateForm />);
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    // O botão deve estar desabilitado quando o nome está vazio
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('deve validar tamanho mínimo do nome', async () => {
    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    
    // Nome muito curto (menos de 3 caracteres)
    fireEvent.change(nameInput, { target: { value: 'AB' } });
    fireEvent.blur(nameInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Nome deve ter pelo menos 3 caracteres/i)).toBeInTheDocument();
    });
  });

  it('deve validar tamanho máximo do nome', async () => {
    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    
    // Nome muito longo (mais de 100 caracteres)
    const longName = 'A'.repeat(101);
    fireEvent.change(nameInput, { target: { value: longName } });
    fireEvent.blur(nameInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Nome não pode exceder 100 caracteres/i)).toBeInTheDocument();
    });
  });

  it('deve verificar se o nome já existe', async () => {
    vi.mocked(api.get).mockImplementation((url) => {
      if (url.includes('/tag/exists')) {
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

    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Categoria Existente' } });
    
    await waitFor(() => {
      expect(screen.getByText(/O nome da categoria já existe/i)).toBeInTheDocument();
    });
  });

  it('deve carregar lista de diretórios', async () => {
    render(<CategoriesCreateForm />);
    
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/directory/all');
    });
  });

  it('deve permitir selecionar diretórios', async () => {
    render(<CategoriesCreateForm />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/CATEGORIES_PAGE.ADD.directories_label/i)).toBeInTheDocument();
    });
  });

  it('deve permitir selecionar websites', async () => {
    render(<CategoriesCreateForm />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/CATEGORIES_PAGE.ADD.websites_label/i)).toBeInTheDocument();
    });
  });

  it('deve criar uma nova categoria com sucesso', async () => {
    vi.mocked(api.post).mockResolvedValue({
      data: { result: { tagId: 1 } },
      status: 201,
    });

    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Nova Categoria' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    // Esperar que o botão fique habilitado
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/tag/create', expect.objectContaining({
        name: 'Nova Categoria',
      }));
    });

    await waitFor(() => {
      expect(screen.getByText(/Categoria criada com sucesso!/i)).toBeInTheDocument();
    });
  });

  it('deve mostrar erro quando a criação falha', async () => {
    vi.mocked(api.post).mockRejectedValue({
      response: {
        status: 500,
        data: { message: 'Erro ao criar categoria' },
      },
    });

    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Categoria Teste' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Erro ao salvar categoria/i)).toBeInTheDocument();
    });
  });

  it('deve validar tamanho mínimo ao submeter', async () => {
    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'AB' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    // Tentar submeter com nome curto
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('deve permitir cancelar e voltar para a lista', async () => {
    render(<CategoriesCreateForm />);
    
    const cancelButton = screen.getByRole('button', { name: /Sair/i });
    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard/categories');
    });
  });

  it('deve desabilitar o botão de submit enquanto está a submeter', async () => {
    vi.mocked(api.post).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        data: { result: {} },
        status: 201,
      }), 1000))
    );

    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Nova Categoria' } });
    
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
      data: { result: { tagId: 1 } },
      status: 201,
    });

    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Nova Categoria' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Categoria criada com sucesso!/i)).toBeInTheDocument();
    });

    // Clicar no botão OK do modal
    const okButton = screen.getByRole('button', { name: /OK/i });
    fireEvent.click(okButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard/categories');
    });
  });

  it('deve desabilitar botão quando o nome é inválido', async () => {
    vi.mocked(api.get).mockImplementation((url) => {
      if (url.includes('/tag/exists')) {
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

    render(<CategoriesCreateForm />);
    
    const nameInput = screen.getByLabelText(/CATEGORIES_PAGE.ADD.name_label/i);
    fireEvent.change(nameInput, { target: { value: 'Categoria Existente' } });
    
    const submitButton = screen.getByRole('button', { name: /ADMIN_CONSOLE.save_and_exit/i });
    
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });
});

