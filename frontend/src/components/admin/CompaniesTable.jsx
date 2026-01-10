import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from 'lucide-react';

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
          <TableCell>
            <Avatar>
              <AvatarImage src="data:image/jpeg;base64,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" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>18-07-2025</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-2 w-fit cursor-pointer">
                  <Edit2 className="w-4" />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
