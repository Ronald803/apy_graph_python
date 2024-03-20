from graphviz import Digraph

print("Gráfico")
# Crear un nuevo grafo dirigido
grafo = Digraph()

# Agregar nodos al grafo
grafo.node('A')
grafo.node('B')
grafo.node('C')
grafo.node('DE')

# Agregar aristas al grafo
grafo.edge('A', 'B')
grafo.edge('B', 'C')
grafo.edge('C', 'A')

# Guardar el gráfico como PNG
grafo.render('graph', format='png', view=False)

print("Gráfico generado como 'graph.png'")