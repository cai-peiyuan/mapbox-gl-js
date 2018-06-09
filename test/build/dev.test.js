import {test} from 'mapabc-gl-js-test';
import fs from 'fs';

test('dev build contains asserts', (t) => {
    t.assert(fs.readFileSync('dist/mapabc-gl-dev.js', 'utf8').indexOf('canary assert') !== -1);
    t.end();
});
