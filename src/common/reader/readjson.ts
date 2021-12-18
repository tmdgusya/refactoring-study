import {readFileSync} from "fs";

const ENCODING_TYPE = 'utf8';
const NOT_EXIST_JSON_FILE_ERROR_MESSAGE = "JSON FILE 이 존재하지 않습니다.";

export default function readJson(path: string) : string | null {

    const jsonBuffer  = readFileSync(path, {encoding: ENCODING_TYPE})

    const result = jsonBuffer.toString();

    if (!result) {
        throw Error(NOT_EXIST_JSON_FILE_ERROR_MESSAGE);
    }

    return result;
}