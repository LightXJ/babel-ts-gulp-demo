import type { DirectionType } from './interface';

export type { DirectionType };

export type AType = 'ltr' | 'rtl' | undefined;

// const b: AType = 'a';

function hello(compiler: string) {
  console.log(`Hello from ${compiler}`);
}
hello("TypeScript")

const a = 'hello';