import 'dotenv/config';

import {RoadMan, RoadmanBuild} from '@roadmanjs/core';
import {appName, log} from './log';

import _chalk from 'chalk';

export const chalk = _chalk;
/**
 * A log roadman using chalk and debug
 * SET process.env.ROADMAN
 * @param RoadmanBuild
 */
export const logRoadman: RoadMan = async (args: RoadmanBuild): Promise<RoadmanBuild> => {
    log(
        `ROADMAN: ${appName}`,
        chalk.greenBright(
            `**************************************${appName}********************`,
            appName
        )
    );
    return args;
};

export * from './log';
export default logRoadman;
