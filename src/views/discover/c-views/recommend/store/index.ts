import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../servies'

export const fetchRecommend = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)
interface IRecommendState {
  banners: any[]
}
const initialState: IRecommendState = {
  banners: []
}

const RecommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      console.log(
        '🚀 ~ file: index.ts:27 ~ changeBannersAction ~ payload:',
        state
      )
      // 修改state
      state.banners = payload
    }
  }
})
export const { changeBannersAction } = RecommendSlice.actions
export default RecommendSlice.reducer
