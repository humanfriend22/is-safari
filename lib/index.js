export default () => {
    const agent = navigator.userAgent.toLowerCase();
    return (agent.indexOf('safari') !== -1) && (agent.indexOf('chrome') == -1);
};