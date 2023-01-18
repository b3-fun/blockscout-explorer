import { Center, Flex, Icon, Link, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import type { AddressTokenBalance } from 'types/api/address';

import NFTIcon from 'icons/nft_shield.svg';
import link from 'lib/link/link';
import TokenLogo from 'ui/shared/TokenLogo';
import TruncatedTextTooltip from 'ui/shared/TruncatedTextTooltip';

type Props = AddressTokenBalance;

const NFTItem = ({ token, token_id: tokenId }: Props) => {
  const tokenLink = link('token_index', { hash: token.address });

  return (
    <LinkBox
      w={{ base: 'calc((100% - 12px)/2)', lg: '210px' }}
      h={{ base: 'auto', lg: '272px' }}
      border="1px solid"
      borderColor={ useColorModeValue('blackAlpha.100', 'whiteAlpha.200') }
      borderRadius="12px"
      p="10px"
      _hover={{ boxShadow: 'md' }}
      fontSize="sm"
      fontWeight={ 500 }
      lineHeight="20px"
    >
      <LinkOverlay href={ tokenLink }/>
      <Center
        w={{ base: '100%', lg: '182px' }}
        h={{ base: 'calc((100vw - 36px)/2 - 12px)', lg: '182px' }}
        bg={ useColorModeValue('blackAlpha.50', 'whiteAlpha.50') }
        mb="18px"
        borderRadius="12px"
      >
        <Icon as={ NFTIcon } boxSize="112px" color={ useColorModeValue('blackAlpha.500', 'whiteAlpha.500') }/>
      </Center>
      { tokenId && (
        <Flex mb={ 2 } ml={ 1 }>
          <Text whiteSpace="pre" variant="secondary">ID# </Text>
          <TruncatedTextTooltip label={ tokenId }>
            <Link
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              href={ link('token_instance_item', { hash: token.address, id: tokenId }) }
            >
              { tokenId }
            </Link>
          </TruncatedTextTooltip>
        </Flex>
      ) }
      { token.name && (
        <Flex alignItems="center">
          <TokenLogo hash={ token.address } name={ token.name } boxSize={ 6 } ml={ 1 } mr={ 1 }/>
          <TruncatedTextTooltip label={ token.name }>
            <Text variant="secondary" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">{ token.name }</Text>
          </TruncatedTextTooltip>
        </Flex>
      ) }
    </LinkBox>
  );
};

export default NFTItem;