import { getCLICommands } from '../../../app/app-info'
/* Global commands */
const g: any = global
g.__CLI_COMMANDS__ = getCLICommands()
