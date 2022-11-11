import * as log4js from 'log4js'
export class Logger {
    static getLogger() {
        log4js.configure({
            appenders: {
                out: { type: 'stdout' },
                app: { type: 'file', filename: 'application.log' }
            },
            categories: {
                default: { appenders: ['out', 'app'], level: 'debug' }
            }
        })
        return log4js.getLogger('all')
    }
}