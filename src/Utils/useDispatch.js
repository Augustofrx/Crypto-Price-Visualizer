import { useDispatch } from "react-redux"

export function useCustomDispatch(fn) {
const dispatch = useDispatch()
return dispatch(fn)
}