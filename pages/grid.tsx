import { ReplyIcon } from '@heroicons/react/solid';
import { Center, Grid } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const GridDemo = () => {
  return (
    <Layout title="Grid">
      <Grid my="xl">
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          span={4}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-green-500 text-center font-bold text-gray-100"
          span={4}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="bg-pink-500 text-center font-bold text-gray-100"
          span={4}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid my="xl">
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          span={6}
        >
          4
        </Grid.Col>
        <Grid.Col
          className="bg-green-500 text-center font-bold text-gray-100"
          span={6}
        >
          5
        </Grid.Col>
        <Grid.Col
          className="bg-pink-500 text-center font-bold text-gray-100"
          span={4}
        >
          6
        </Grid.Col>
      </Grid>
      <Grid my="xl" grow>
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          span={6}
        >
          4
        </Grid.Col>
        <Grid.Col
          className="bg-green-500 text-center font-bold text-gray-100"
          span={6}
        >
          5
        </Grid.Col>
        <Grid.Col
          className="bg-pink-500 text-center font-bold text-gray-100"
          span={4}
        >
          6
        </Grid.Col>
        <Grid.Col
          className="bg-orange-500 text-center font-bold text-gray-100"
          span={4}
        >
          7
        </Grid.Col>
      </Grid>
      <Grid my="xl">
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          className="bg-green-500 text-center font-bold text-gray-100"
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          className="bg-pink-500 text-center font-bold text-gray-100"
          span={3}
          offset={3}
        >
          {/* offsetは右にどれだけシフトするか */}6
        </Grid.Col>
      </Grid>
      <Grid my="xl" justify="center" align="center">
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="h-24 bg-blue-500 text-center font-bold text-gray-100"
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          className="h-36 bg-green-500 text-center font-bold text-gray-100"
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          className="h-12 bg-pink-500 text-center font-bold text-gray-100"
          span={3}
        >
          6
        </Grid.Col>
      </Grid>
      {/* md(992px),lg(1200px)指定はそのpxを超えたら変化 */}
      <Grid my="xl">
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          md={6}
          lg={3}
        >
          {/* この場合、mdより小さい場合サイズ12となる */}4
        </Grid.Col>
      </Grid>
      <Grid my="xl">
        {/* spanは１行をサイズ12としている(12を超えたら次の行にいく) */}
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          md={6}
          lg={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          className="bg-green-500 text-center font-bold text-gray-100"
          md={6}
          lg={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          className="bg-pink-500 text-center font-bold text-gray-100"
          md={6}
          lg={3}
        >
          6
        </Grid.Col>
        <Grid.Col
          className="bg-orange-500 text-center font-bold text-gray-100"
          md={6}
          lg={3}
        >
          7
        </Grid.Col>
      </Grid>
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  );
};

export default GridDemo;
