import { unknownError } from './unknown-error';
import { UnpackResolved, UnpackRejected } from './unpack';

/**
 * Represents the completion of an asynchronous operation
 */
export interface _Promise<T, E> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then(onfulfilled?: undefined | null, onrejected?: undefined | null): _Promise<T, E>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R>(
        onfulfilled: (value: T) => R,
        onrejected?: undefined | null
    ): _Promise<UnpackResolved<R>, E | UnpackRejected<R> | unknownError>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R>(
        onfulfilled: undefined | null,
        onrejected: (reason: E) => R 
    ): _Promise<T | UnpackResolved<R>, UnpackRejected<R> | unknownError>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R1, R2>(
        onfulfilled: (value: T) => R1,
        onrejected: (reason: E) => R2
    ): _Promise<UnpackResolved<R1> | UnpackResolved<R2>, UnpackRejected<R1> | UnpackRejected<R2> | unknownError>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch(
        onrejected?: undefined | null
    ): _Promise<T, E>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of the callback.
     */
    catch<R>(
        onrejected: (reason: E) => R
    ): _Promise<T | UnpackResolved<R>, UnpackRejected<R> | unknownError>;
}
