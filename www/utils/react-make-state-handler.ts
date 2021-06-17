import type { ChangeEvent } from "react";
import { useState } from "react";

/**
 * Like "useState()", except meant only for objects and returns third property which is made
 * to handle the common idiom of "onChange={e => setSomethingState(e.target.value)}"
 *
 * @example
 * const [userState, setUserState, makeUserStateHandler] = makeStateHandler({
      id: null,
      name: "",
   });
   
   <input onChange={makeUserStateHandler("name")} />
 */
export function makeStateHandler<T extends Record<string, any> = {}>(
  initialStateObj: T
) {
  const [state, setState] = useState(initialStateObj);

  const makeSetStateHandler = (prop: string) => (e: ChangeEvent<any>) => {
    e.preventDefault();
    setState({ ...state, [prop]: e.target.value });
  };

  return [state, setState, makeSetStateHandler] as const;
}
