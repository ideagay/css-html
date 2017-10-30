/**
 * Created by hyb on 2017/10/30.
 */
const plugin = {
    install (Vue) {
        Vue.prototype.setBodyBg = (color) => {
            document.body.style.backgroundColor = color;
        };
    }
};

export default plugin;
