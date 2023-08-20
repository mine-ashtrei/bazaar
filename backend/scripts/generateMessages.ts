import * as fs from "fs";
import * as yaml from "js-yaml";

const inputFilePath = "./scripts/messages.yaml";
const outputFilePathMessages = "./src/common/messages.ts";

// Define the custom type for the parsed YAML data
interface MessageDetail {
  summary: string;
  userAction: string;
  description: string;
}

interface MessageGroup {
  [messageName: string]: MessageDetail;
}

interface ParsedYaml {
  messages: {
    [groupName: string]: MessageGroup;
  };
}

// Read the messages.yaml file
const fileContent = fs.readFileSync(inputFilePath, "utf8");

// Parse the YAML content
const yamlData: ParsedYaml = yaml.load(fileContent) as ParsedYaml;

const messageObjects: string[] = [];
const messageExports: string[] = [];

for (const [group, messages] of Object.entries(yamlData.messages)) {
  for (const [name, message] of Object.entries(messages)) {
    const constName = `${group.toUpperCase()}_${name.toUpperCase()}`;
    const messageObject = `const ${constName}: ReturnMessage = {
      summary: "${message.summary}",
      userAction: "${message.userAction}",
      description: "${message.description}",
};`;
    messageObjects.push(messageObject);
    messageExports.push(`${constName}: ${constName}`);
  }
}

// Generate the TypeScript file content
const tsContentMessages = `
import { ReturnMessage } from "./models";

${messageObjects.join("\n\n")}

export const MESSAGES = {
  ${messageExports.join(",\n  ")},
};
`;

fs.writeFileSync(outputFilePathMessages, tsContentMessages);
