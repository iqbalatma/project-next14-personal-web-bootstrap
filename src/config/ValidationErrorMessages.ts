import {ZodError, ZodIssue} from "zod";

type ParsedErrors = {
    [key: string]: string[];
};

const ValidationErrorMessages = {
    required: (attribute: string) => {
        return `${attribute} is required`
    },
    getParsedErrorMessage: (errors: ZodIssue[]): ParsedErrors => {
        const parsedErrors: ParsedErrors = {};

        errors.forEach((item) => {
            item.path.forEach((path) => {
                if (!parsedErrors[path]) {
                    parsedErrors[path] = [];
                }

                parsedErrors[path].push(item.message)
            })
        })

        return parsedErrors;
    }
}

export default ValidationErrorMessages