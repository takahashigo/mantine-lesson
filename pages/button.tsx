import { Button, Group } from '@mantine/core';
import Layout from '../components/Layout';
import { ReplyIcon } from '@heroicons/react/solid';
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react';
import Link from 'next/link';

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group direction="column" position="center">
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="red"
          radius="lg"
          size="md"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        {/* 3種類の指定の仕方 */}
        <Button mt={16}>Click</Button>
        <Button mt="md">Click</Button>
        <Button className="mt-4">Click</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  );
};

export default ButtonDemo;
