import React from 'react'

import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const ProfileCard: React.FC<Author> = ({ name, role, foto, description }) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(foto.url)} alt={foto.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
