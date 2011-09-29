!SLIDE
# Symmetric Modes of Encryption #

!SLIDE
# Symmetric Modes of Encryption #

## So you want encrypt more than the block size? ##

!SLIDE code

openssl &lt;tab&gt;&lt;tab&gt;

!SLIDE code smallest table_with_head

<table>
<thead>
  <tr><td colspan="4">$ openssl &lt;tab&gt;&lt;tab&gt;</td></tr>
</thead>
<tbody>
<tr>
<td>aes-128-cbc       </td><td>cast5-ecb         </td><td>dsaparam          </td><td>rc2-cfb</td>
</tr><tr>
<td>aes-128-ecb       </td><td>cast5-ofb         </td><td>ec                </td><td>rc2-ecb</td>
</tr><tr>
<td>aes-192-cbc       </td><td>ciphers           </td><td>ecparam           </td><td>rc2-ofb</td>
</tr><tr>
<td>aes-192-ecb       </td><td>crl               </td><td>enc               </td><td>rc4</td>
</tr><tr>
<td>aes-256-cbc       </td><td>crl2pkcs7         </td><td>engine            </td><td>rc4-40</td>
</tr><tr>
<td>aes-256-ecb       </td><td>des               </td><td>errstr            </td><td>req</td>
</tr><tr>
<td>asn1parse         </td><td>des-cbc           </td><td>gendh             </td><td>rmd160</td>
</tr><tr>
<td>base64            </td><td>des-cfb           </td><td>gendsa            </td><td>rsa</td>
</tr><tr>
<td>bf                </td><td>des-ecb           </td><td>genrsa            </td><td>rsautl</td>
</tr><tr>
<td>bf-cbc            </td><td>des-ede           </td><td>md2               </td><td>s_client</td>
</tr><tr>
<td>bf-cfb            </td><td>des-ede-cbc       </td><td>md4               </td><td>s_server</td>
</tr><tr>
<td>bf-ecb            </td><td>des-ede-cfb       </td><td>md5               </td><td>s_time</td>
</tr><tr>
<td>bf-ofb            </td><td>des-ede-ofb       </td><td>nseq              </td><td>sess_id</td>
</tr><tr>
<td>ca                </td><td>des-ede3          </td><td>ocsp              </td><td>sha</td>
</tr><tr>
<td>camellia-128-cbc  </td><td>des-ede3-cbc      </td><td>passwd            </td><td>sha1</td>
</tr><tr>
<td>camellia-128-ecb  </td><td>des-ede3-cfb      </td><td>pkcs12            </td><td>smime</td>
</tr><tr>
<td>camellia-192-cbc  </td><td>des-ede3-ofb      </td><td>pkcs7             </td><td>speed</td>
</tr><tr>
<td>camellia-192-ecb  </td><td>des-ofb           </td><td>pkcs8             </td><td>spkac</td>
</tr><tr>
<td>camellia-256-cbc  </td><td>des3              </td><td>prime             </td><td>verify</td>
</tr><tr>
<td>camellia-256-ecb  </td><td>desx              </td><td>rand              </td><td>version</td>
</tr><tr>
<td>cast              </td><td>dgst              </td><td>rc2               </td><td>x509</td>
</tr><tr>
<td>cast-cbc          </td><td>dh                </td><td>rc2-40-cbc</td><td></td>
</tr><tr>
<td>cast5-cbc         </td><td>dhparam           </td><td>rc2-64-cbc</td><td></td>
</tr><tr>
<td>cast5-cfb         </td><td>dsa               </td><td>rc2-cbc</td><td></td>
</tr></tbody></table>



!SLIDE code smallest table_with_head

<table>
<thead>
  <tr><td colspan="4">$ openssl des-ede3 -h</td></tr>
</thead>
<tbody>
<tr><td colspan="4">...</td></tr>
<tr><td colspan="4">Cipher Types:</td></tr>
<tr><td>aes-128-cbc  </td><td>aes128    </td><td>des-cfb1      </td><td>rc2-40-cbc</td></tr>
<tr><td>aes-128-cfb  </td><td>aes192    </td><td>des-cfb8      </td><td>rc2-64-cbc</td></tr>
<tr><td>aes-128-cfb1 </td><td>aes256    </td><td>des-ecb       </td><td>rc2-cbc</td></tr>
<tr><td>aes-128-cfb8 </td><td>bf        </td><td>des-ede       </td><td>rc2-cfb</td></tr>
<tr><td>aes-128-ecb  </td><td>bf-cbc    </td><td>des-ede-cbc   </td><td>rc2-ecb</td></tr>
<tr><td>aes-128-ofb  </td><td>bf-cfb    </td><td>des-ede-cfb   </td><td>rc2-ofb</td></tr>
<tr><td>aes-192-cbc  </td><td>bf-ecb    </td><td>des-ede-ofb   </td><td>rc4</td></tr>
<tr><td>aes-192-cfb  </td><td>bf-ofb    </td><td>des-ede3      </td><td>rc4-40</td></tr>
<tr><td>aes-192-cfb1 </td><td>blowfish  </td><td>des-ede3-cbc  </td><td>rc5</td></tr>
<tr><td>aes-192-cfb8 </td><td>cast      </td><td>des-ede3-cfb  </td><td>rc5-cbc</td></tr>
<tr><td>aes-192-ecb  </td><td>cast-cbc  </td><td>des-ede3-cfb1 </td><td>rc5-cfb</td></tr>
<tr><td>aes-192-ofb  </td><td>cast5-cbc </td><td>des-ede3-cfb8 </td><td>rc5-ecb</td></tr>
<tr><td>aes-256-cbc  </td><td>cast5-cfb </td><td>des-ede3-ofb  </td><td>rc5-ofb</td></tr>
<tr><td>aes-256-cfb  </td><td>cast5-ecb </td><td>des-ofb       </td><td>seed</td></tr>
<tr><td>aes-256-cfb1 </td><td>cast5-ofb </td><td>des3          </td><td>seed-cbc</td></tr>
<tr><td>aes-256-cfb8 </td><td>des       </td><td>desx          </td><td>seed-cfb</td></tr>
<tr><td>aes-256-ecb  </td><td>des-cbc   </td><td>desx-cbc      </td><td>seed-ecb</td></tr>
<tr><td>aes-256-ofb  </td><td>des-cfb   </td><td>rc2           </td><td>seed-ofb</td></tr>
</tbody></table>

