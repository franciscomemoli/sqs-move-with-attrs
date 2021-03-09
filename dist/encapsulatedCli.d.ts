#!/usr/bin/env node
import { SqsMoveWithAttrs } from "./sqs-move-with-attrs";
export declare const runCli: (SqsMoveWithAttrsFactory: new (...args: any[]) => SqsMoveWithAttrs) => Promise<void>;
