import Address, { AddressOwnerType, IAddress } from "../models/addressModel";
import { Types } from "mongoose";

export const createAddress = async (addressData: IAddress) => {
  const newAddress = new Address(addressData);
  const savedAddress = await newAddress.save();
  return savedAddress;
};

export const getAddressByOwnerId = async (
  ownerId: Types.ObjectId,
  ownerType: AddressOwnerType
): Promise<IAddress[] | null> => {
  const addresses = await Address.find({
    owner: ownerId,
    ownerType: ownerType,
  });
  return addresses;
};

export const getAddressById = async (
  addressId: Types.ObjectId
): Promise<IAddress | null> => {
  const address = await Address.findOne({ _id: addressId });
  return address;
};

export const deleteAddressById = async (
  addressId: Types.ObjectId
): Promise<IAddress | null> => {
  return await Address.findByIdAndRemove(addressId).exec();
};

export const updateAddressById = async (
  addressId: Types.ObjectId,
  addressData: Partial<IAddress>
): Promise<IAddress | null> => {
  addressData.updatedAt = new Date(Date.now());
  const updatedAddress = await Address.findByIdAndUpdate(
    addressId,
    addressData,
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedAddress;
};
