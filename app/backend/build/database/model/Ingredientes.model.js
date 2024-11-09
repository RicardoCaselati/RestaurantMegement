"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueIngrediente = void 0;
const typeorm_1 = require("typeorm");
let EstoqueIngrediente = class EstoqueIngrediente {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EstoqueIngrediente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EstoqueIngrediente.prototype, "ingrediente_id", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], EstoqueIngrediente.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], EstoqueIngrediente.prototype, "data_movimentacao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["compra", "consumo"],
    }),
    __metadata("design:type", String)
], EstoqueIngrediente.prototype, "tipo_movimentacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], EstoqueIngrediente.prototype, "receita_id", void 0);
EstoqueIngrediente = __decorate([
    (0, typeorm_1.Entity)("estoque_ingredientes")
], EstoqueIngrediente);
exports.EstoqueIngrediente = EstoqueIngrediente;
//# sourceMappingURL=Ingredientes.model.js.map