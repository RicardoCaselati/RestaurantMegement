enum Permission {
    CREATE_USER = "create_user",

    // Permissões de cadastro
    CREATE_MENU = "create_menu",
    CREATE_EMPLOYEE = "create_employee",
    CREATE_STOCK = "create_stock",
    CREATE_COMPANY = "create_company",
    CREATE_CLIENT = "create_client",

    // Permissões de visualização
    VIEW_MENU = "view_menu",
    VIEW_PERSONNEL_DATA = "view_personnel_data",
    VIEW_INVENTORY_DATA = "view_inventory_data"
}
  
  // Interface para representar uma função (role) e suas permissões
  interface Role {
    permissions: Permission[];  // Um array de permissões
  }
  
  // Interface para a estrutura completa de roles
  interface Roles {
    admin: Role;
    manager: Role;
    // school?: Role;
    // teacher?: Role;
    // student?: Role;
  }
  
  // O objeto principal que contém os roles
  interface RolesConfig {
    roles: Roles;
  }

  // Definição do objeto baseado no JSON fornecido
  const rolesConfig: RolesConfig = {
    roles: {
      admin: {
        permissions: [
          Permission.CREATE_USER,
          Permission.CREATE_MENU,
          Permission.CREATE_EMPLOYEE,
          Permission.CREATE_STOCK,
          Permission.CREATE_COMPANY,
          Permission.CREATE_CLIENT,
          Permission.VIEW_MENU,
          Permission.VIEW_PERSONNEL_DATA,
          Permission.VIEW_INVENTORY_DATA
        ]
      },
      manager: {
        permissions: [
          Permission.CREATE_MENU,
          Permission.CREATE_EMPLOYEE,
          Permission.CREATE_STOCK,
          Permission.CREATE_COMPANY,
          Permission.CREATE_CLIENT,
          Permission.VIEW_MENU,
          Permission.VIEW_PERSONNEL_DATA,
          Permission.VIEW_INVENTORY_DATA
        ]
      },
    }
  };
  
  // Função de exemplo para verificar se uma função tem uma permissão
  function hasPermission(role: Role, permission: Permission): boolean {
    return role.permissions.includes(permission);
  }
  
  // Exemplo de uso
//   const userRole = rolesConfig.roles.editor;
//   console.log(hasPermission(userRole, Permission.CREATE_POST)); // true
  