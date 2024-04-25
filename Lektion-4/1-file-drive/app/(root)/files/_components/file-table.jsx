import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const FileTable = ({ files }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Type</TableHead>
          <TableHead>Filename</TableHead>
          <TableHead>Added</TableHead>
          <TableHead>Size</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          files.length ? files.map(file => (
            <TableRow>
              <TableCell>{file.type}</TableCell>
            </TableRow>
          )): (
            <TableRow>
              <TableCell colSpan="5" className="text-center">No files found</TableCell>
            </TableRow>
          )
        }
      </TableBody>
    </Table>
  )
}
export default FileTable