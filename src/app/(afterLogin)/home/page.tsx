import style from './home.module.css';
import Tab from "@/(afterLogin)/home/_component/Tab";
import TabProvider from "@/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/(afterLogin)/home/_component/PostForm";
import Post from "@/(afterLogin)/_component/Post";
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

async function getPostRecommends() {

}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends
  })
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab/>
          <PostForm />
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </TabProvider>
    </HydrationBoundary>
    </main>
  )
}