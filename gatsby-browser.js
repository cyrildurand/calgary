exports.onRouteUpdate = ({
    location
}) => {
    const event = new global.window.CustomEvent('gatsby::routeUpdate', {
        location: {
            location
        },
    });
    global.window.dispatchEvent(event);
}