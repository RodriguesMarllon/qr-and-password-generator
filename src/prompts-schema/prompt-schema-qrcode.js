import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Type the link to genereate the QR Code")
    },
    {
        name: "Type",
        description: chalk.yellow("Choose the QR Code type (1 - NORMAL or 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Choose between 1 and 2"),
        required: true
    },
];

export default promptSchemaQRCode;