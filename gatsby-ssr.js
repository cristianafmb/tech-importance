
var React = require("react");
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    if (typeof document !== "undefined" && document !== undefined) {
        const headComponents = getHeadComponents();

        headComponents.sort((a, b) => {
            if (a.props && a.props["data-react-helmet"]) {
                return 0;
            }
            return 1;
        });
        replaceHeadComponents(headComponents);
    }
};


export { default as wrapRootElement } from './src/state/ReduxWrapper'