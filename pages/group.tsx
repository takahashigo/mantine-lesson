import { ReplyIcon } from '@heroicons/react/solid';
import { Button, Center, Group } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const GroupDemo = () => {
  return (
    <Layout title="Group">
      {/* <Group my="md" position="apart">　等間隔 */}
      <Group my="xl" grow>
        <Button color="blue">1</Button>
        <Button color="orange">2</Button>
        <Button color="teal">3</Button>
      </Group>
      <Group my="xl" direction="column" position="center">
        <Button color="blue">1</Button>
        <Button color="orange">2</Button>
        <Button color="teal">3</Button>
      </Group>
      <Group my="xl">
        <Button color="blue">1</Button>
        <Button color="orange">2</Button>
        <Button color="teal">3</Button>
      </Group>
      <Group my="xl" position="apart">
        <Button color="blue">1</Button>
        <Button color="orange">2</Button>
        <Button color="teal">3</Button>
      </Group>
      <Group my="xl" align="start">
        <Button className="h-10" color="blue">
          1
        </Button>
        <Button className="h-20" color="orange">
          2
        </Button>
        <Button className="h-32" color="teal">
          3
        </Button>
      </Group>
      {/* Centerコンポーネントは中央寄せ */}
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  );
};

export default GroupDemo;
