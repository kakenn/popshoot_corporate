const srcPath = "./src/"
const distPath = "./dist/"
const path = {
  src: {
    sass: [`${srcPath}scss/**/*.scss`, `!${srcPath}scss/**/_*.scss`],
    script: [`${srcPath}script/**/*.js`],
    ejs: [`${srcPath}ejs/**/*.ejs`, `!${srcPath}ejs/**/_*.ejs`, `!${srcPath}ejs/component/**/*.ejs`],
    images: [`${srcPath}image/**/*.*`]
  },
  dist: {
    style: `${distPath}assets/css`,
    styleMap: `${distPath}assets/css/maps`,
    script: `${distPath}assets/script`,
    scriptMap: `${distPath}assets/script/map`,
    root: `${distPath}`,
    images: `${distPath}assets/images`
  }
}
import siteConfig from '../siteConfig';


export {path, siteConfig}
