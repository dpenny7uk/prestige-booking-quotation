$('.ui.left.sidebar').sidebar({
    dimPage: false,
    transition: 'push',
    exclusive: false,
    closable: false
    });
   
    $('.ui.left.sidebar')
    .sidebar('attach events', '#left-sidebar-toggle');