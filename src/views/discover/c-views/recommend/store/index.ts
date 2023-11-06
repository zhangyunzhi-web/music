import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../servies'

export const fetchRecommend = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log('🚀 ~ file: index.ts:6 ~ fetchRecommend ~ res:', res)
  return res.banners
})
interface IRecommendState {
  banners: string[]
}
const initialState: IRecommendState = {
  banners: []
}

const RecommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommend.pending, () => {
        console.log('pending')
      })
      .addCase(fetchRecommend.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
      .addCase(fetchRecommend.rejected, () => {
        console.log('rejected')
      })
  }
})
export default RecommendSlice.reducer
