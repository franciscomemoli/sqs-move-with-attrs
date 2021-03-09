import {SqsMoveWithAttrs} from "./sqs-move-with-attrs";

export class Test1 extends SqsMoveWithAttrs {
	public handleMessageBody = async(body: string): Promise<string> => {
		const jsonBody = JSON.parse(body);
		// if (jsonBody.mediaType === null) {
		// 	jsonBody.mediaType = 'BANNER';
		// }
		console.log('JSON.stringify(jsonBody)', JSON.stringify(jsonBody))
        return JSON.stringify(jsonBody);
    }
}