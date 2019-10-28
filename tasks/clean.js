import del from 'del';
import conf from './helpers/options';

export default () => del([`${conf.paths.dist.index}/**/*`, `!${conf.paths.dist.index}/cache`])
