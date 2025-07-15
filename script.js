const container = document.getElementById('network');

const nodes = new vis.DataSet([
    // PRIMER AÑO
    { id: 1, label: 'Derecho Romano', color: '#f8bbd0' },
    { id: 2, label: 'Teoría del Derecho', color: '#f8bbd0' },
    { id: 3, label: 'Derecho Político', color: '#f48fb1' },
    { id: 4, label: 'Historia del Derecho', color: '#f48fb1' },
    { id: 5, label: 'Fundamentos Filosóficos', color: '#f06292' },
    { id: 6, label: 'Integración de Saberes I', color: '#f8bbd0' },
    { id: 7, label: 'Fundamentos Teológicos', color: '#ce93d8' },
    { id: 8, label: 'Derecho Económico I', color: '#f8bbd0' },
    { id: 9, label: 'Integración de Saberes II', color: '#f8bbd0' },

    // SEGUNDO AÑO
    { id: 10, label: 'Derecho Civil I', color: '#ec407a' },
    { id: 11, label: 'Derecho Procesal I', color: '#f48fb1' },
    { id: 12, label: 'Derecho Constitucional I', color: '#f48fb1' },
    { id: 13, label: 'Derecho Económico II', color: '#f8bbd0' },
    { id: 14, label: 'Derecho Canónico', color: '#ce93d8' },
    { id: 15, label: 'Derecho Internacional Público I', color: '#f48fb1' },
    { id: 16, label: 'Integración de Saberes III', color: '#f8bbd0' },
    { id: 17, label: 'Derecho Civil II', color: '#ec407a' },
    { id: 18, label: 'Derecho Procesal II', color: '#f48fb1' },
    { id: 19, label: 'Derecho Constitucional II', color: '#f48fb1' },
    { id: 20, label: 'Derecho Económico III', color: '#f8bbd0' },
    { id: 21, label: 'Inglés I', color: '#ce93d8' },
    { id: 22, label: 'Derecho Internacional Público II', color: '#f48fb1' },
    { id: 23, label: 'Seminario Jurídico I', color: '#f06292' },

    // TERCER AÑO
    { id: 24, label: 'Derecho Civil III', color: '#ec407a' },
    { id: 25, label: 'Derecho Procesal III', color: '#f48fb1' },
    { id: 26, label: 'Derecho Administrativo I', color: '#ce93d8' },
    { id: 27, label: 'Derecho del Trabajo I', color: '#f48fb1' },
    { id: 28, label: 'Derecho Comercial I', color: '#f48fb1' },
    { id: 29, label: 'Derecho Penal I', color: '#f48fb1' },
    { id: 30, label: 'Integración de Saberes IV', color: '#f8bbd0' },
    { id: 31, label: 'Derecho Civil IV', color: '#ec407a' },
    { id: 32, label: 'Derecho Procesal IV', color: '#f48fb1' },
    { id: 33, label: 'Derecho Administrativo II', color: '#ce93d8' },
    { id: 34, label: 'Derecho del Trabajo II', color: '#f48fb1' },
    { id: 35, label: 'Derecho Comercial II', color: '#f48fb1' },
    { id: 36, label: 'Derecho Penal II', color: '#f48fb1' },
    { id: 37, label: 'Seminario Jurídico II', color: '#f06292' },

    // CUARTO AÑO
    { id: 38, label: 'Derecho Civil V', color: '#ec407a' },
    { id: 39, label: 'Derecho Procesal V', color: '#f48fb1' },
    { id: 40, label: 'Seguridad Social', color: '#f8bbd0' },
    { id: 41, label: 'Derecho Tributario I', color: '#f06292' },
    { id: 42, label: 'Derecho Comercial III', color: '#f48fb1' },
    { id: 43, label: 'Derecho Penal III', color: '#f48fb1' },
    { id: 44, label: 'Litigación', color: '#f8bbd0' },
    { id: 45, label: 'Ética Profesional', color: '#f06292' },
    { id: 46, label: 'Derecho Civil VI', color: '#ec407a' },
    { id: 47, label: 'Derecho Procesal VI', color: '#f48fb1' },
    { id: 48, label: 'Seminario Jurídico III', color: '#f06292' },
    { id: 49, label: 'Derecho Tributario II', color: '#f06292' },
    { id: 50, label: 'Derecho Comercial IV', color: '#f48fb1' },
    { id: 51, label: 'Derecho Penal IV', color: '#f48fb1' },
    { id: 52, label: 'Optativo de Profundización I', color: '#ce93d8' },

    // QUINTO AÑO
    { id: 53, label: 'Práctica Profesional', color: '#f48fb1' },
    { id: 54, label: 'Derecho Civil VII', color: '#ec407a' },
    { id: 55, label: 'Derecho Procesal VII', color: '#f48fb1' },
    { id: 56, label: 'Anteproyecto de Investigación', color: '#f8bbd0' },
    { id: 57, label: 'Filosofía del Derecho', color: '#f06292' },
    { id: 58, label: 'Derecho Internacional Privado', color: '#f48fb1' },
    { id: 59, label: 'Derecho Civil VIII', color: '#ec407a' },
    { id: 60, label: 'Tesina', color: '#f8bbd0' },
    { id: 61, label: 'Optativo de Profundización II', color: '#ce93d8' },
    { id: 62, label: 'Optativo de Profundización III', color: '#ce93d8' }
]);

const edges = new vis.DataSet([
    // Relaciones principales de requisitos (solo ejemplos clave)
    { from: 5, to: 7 },
    { from: 7, to: 14 },
    { from: 8, to: 13 },
    { from: 13, to: 20 },
    { from: 3, to: 12 },
    { from: 12, to: 19 },
    { from: 1, to: 10 },
    { from: 2, to: 10 },
    { from: 10, to: 17 },
    { from: 17, to: 24 },
    { from: 24, to: 31 },
    { from: 31, to: 38 },
    { from: 38, to: 46 },
    { from: 46, to: 54 },
    { from: 54, to: 59 },
    { from: 59, to: 60 },
    { from: 10, to: 23 },
    { from: 11, to: 23 },
    { from: 23, to: 37 },
    { from: 24, to: 37 },
    { from: 18, to: 37 },
    { from: 37, to: 48 },
    { from: 38, to: 48 },
    { from: 39, to: 48 },
    { from: 48, to: 53 },
    { from: 20, to: 41 },
    { from: 41, to: 49 },
    { from: 35, to: 42 },
    { from: 42, to: 50 },
    { from: 36, to: 43 },
    { from: 43, to: 51 },
    { from: 1, to: 58 },
    { from: 5, to: 57 },
    { from: 56, to: 60 }
]);

const data = {
    nodes: nodes,
    edges: edges
};

const options = {
    nodes: {
        shape: 'box',
        font: {
            color: '#880e4f',
            size: 14
        },
        margin: 10
    },
    edges: {
        arrows: 'to',
        color: '#ba68c8',
        smooth: {
            type: 'cubicBezier',
            forceDirection: 'vertical',
            roundness: 0.4
        }
    },
    layout: {
        hierarchical: {
            direction: 'UD',
            sortMethod: 'directed'
        }
    },
    physics: {
        enabled: false
    }
};

new vis.Network(container, data, options);

