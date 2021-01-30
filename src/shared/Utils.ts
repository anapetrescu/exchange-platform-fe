import { _isEmpty, _isNil } from './lodash-utils';

export class Utils {
    static isNullOrEmpty(item: any): boolean {
        if (_isNil(item) || _isEmpty(item)) {
            return true;
        }
        return false;
    }

    static isEmailValide(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

