/** Creates tfjs bundle used by Human browser build target
 * @external
 */

/* eslint-disable import/no-extraneous-dependencies */

// export * from '@vladmandic/tfjs';

// export all from build bundle
export * from '@tensorflow/tfjs/dist/index.js';
export * from '@tensorflow/tfjs-backend-webgl/dist/index.js';
export * from '@tensorflow/tfjs-backend-wasm/dist/index.js';

// add webgpu to bundle, experimental
export * from '@tensorflow/tfjs-backend-webgpu/dist/index.js';

// add tflite to bundle, experimental
// @ts-ignore duplicate definition for setWasmPath
// export * from '@tensorflow/tfjs-tflite/dist/index.js';

// export versions, overrides version object from @tensorflow/tfjs
export { version } from '../dist/tfjs.version.js';

// export utility types used by Human
export { Tensor } from '@tensorflow/tfjs/dist/index.js';
export { GraphModel } from '@tensorflow/tfjs-converter/dist/index';
