"use strict";
var Permission;
(function (Permission) {
    Permission["CREATE_USER"] = "create_user";
    // Permissões de cadastro
    Permission["CREATE_MENU"] = "create_menu";
    Permission["CREATE_EMPLOYEE"] = "create_employee";
    Permission["CREATE_STOCK"] = "create_stock";
    Permission["CREATE_COMPANY"] = "create_company";
    Permission["CREATE_CLIENT"] = "create_client";
    // Permissões de visualização
    Permission["VIEW_MENU"] = "view_menu";
    Permission["VIEW_PERSONNEL_DATA"] = "view_personnel_data";
    Permission["VIEW_INVENTORY_DATA"] = "view_inventory_data";
})(Permission || (Permission = {}));
// Definição do objeto baseado no JSON fornecido
const rolesConfig = {
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
function hasPermission(role, permission) {
    return role.permissions.includes(permission);
}
// Exemplo de uso
//   const userRole = rolesConfig.roles.editor;
//   console.log(hasPermission(userRole, Permission.CREATE_POST)); // true
//# sourceMappingURL=usersPermision.js.map