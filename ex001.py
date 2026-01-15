# Declaração de Classe
class Gafanhoto:
    def __init__(self, nome): # Método construtor
        # Atributos de Instância
        self.nome = nome
        self.idade = 0

    # Métodos de Instância
    def aniversario(self):
        self.idade = self.idade + 1

    def aniversario2(self): # AGORA ESTÁ ALINHADO CORRETAMENTE
        return f"{self.nome} é Gafanhota e tem {self.idade} anos de idade"

# Declaração de Objetos
g1 = Gafanhoto("Juliana") # CHAMANDO A CLASSE CORRETAMENTE
g1.idade = 36
print(g1.aniversario2()) # PARA APARECER O RESULTADO NO CONSOLE

g2 = Gafanhoto(" Mauro") # CHAMANDO A CLASSE CONCORRENTE
g2.idade = 38
print(g2.aniversario2())  # PARA APARECER O RESULTADO NO CONSOLE