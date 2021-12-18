import {readFileSync} from "fs";

const ENCODING_TYPE = 'utf8';
const NOT_EXIST_JSON_FILE_ERROR_MESSAGE = "JSON FILE 이 존재하지 않습니다.";

const jsonParserUnknown = (jsonString: string) : unknown => JSON.parse(jsonString)

export default function readJson<T>(path: string) : T {

    const jsonBuffer  = readFileSync(path, {encoding: ENCODING_TYPE})

    const result = jsonBuffer;

    if (!result) {
        throw Error(NOT_EXIST_JSON_FILE_ERROR_MESSAGE);
    }

    return jsonParserUnknown(result) as T;
}