import { CustomCellRendererProps } from 'ag-grid-react'
import { ICasesData } from '../config/casesTypes'

interface ICellLinkOrganizationsParams extends CustomCellRendererProps {
  data: ICasesData
}

export const CellLinkOrganizations = ({ data }: ICellLinkOrganizationsParams) => {
  const linkStyle = { color: 'var(--link)' }

  return (
    <div>
      {data.orgs.map((el, index) => (
        <a href='#' key={index} style={linkStyle}>
          {el.title}{' '}
        </a>
      ))}
    </div>
  )
}
