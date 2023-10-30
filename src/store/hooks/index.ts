import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { DispatchReturnType, StateReturnType } from '../index'
//hooks  使用useAppSelector替代useSelector,直接会有类型
export const useAppSelector: TypedUseSelectorHook<StateReturnType> = useSelector
export const useAppDispatch: () => DispatchReturnType = useDispatch
